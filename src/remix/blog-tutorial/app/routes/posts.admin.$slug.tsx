import type {
  ActionArgs,
  ActionFunction,
  LoaderFunction,
} from "@remix-run/node";
import { json, redirect } from "@remix-run/node";
import {
  Form,
  useActionData,
  useLoaderData,
  useNavigation,
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import invariant from "tiny-invariant";

import type { Post } from "~/models/post.server";
import {
  createPost,
  getPost,
  updatePost,
  deletePost,
} from "~/models/post.server";

type LoaderData = { post?: Post };

export const loader: LoaderFunction = async ({ request, params }) => {
  invariant(params.slug, "slug is required");
  if (params.slug === "new") {
    return json({});
  }
  const post = await getPost(params.slug ?? "");
  if (!post) {
    throw new Response("Not Found", { status: 404 });
  }
  return json<LoaderData>({ post });
};

type ActionData =
  | {
      title: null | string;
      slug: null | string;
      markdown: null | string;
    }
  | undefined;

export const action: ActionFunction = async ({
  request,
  params,
}: ActionArgs) => {
  invariant(params.slug, "slug is required");
  const formData = await request.formData();
  const intent = formData.get("intent");

  if (intent === "delete") {
    await deletePost(params.slug);
    return redirect("/posts/admin");
  }

  const title = formData.get("title");
  const slug = formData.get("slug");
  const markdown = formData.get("markdown");

  const errors: ActionData = {
    title: title ? null : "Title is required",
    slug: slug ? null : "Slug is required",
    markdown: markdown ? null : "Markdown is required",
  };

  const hasErrors = Object.values(errors).some((errorMessage) => errorMessage);
  if (hasErrors) {
    return json<ActionData>(errors);
  }

  invariant(typeof title === "string", "title must be a string");
  invariant(typeof slug === "string", "slug must be a string");
  invariant(typeof markdown === "string", "markdown must be a string");

  await new Promise((res) => setTimeout(res, 1000));

  if (params.slug === "new") {
    await createPost({ title, slug, markdown });
  } else {
    await updatePost(params.slug, { title, slug, markdown });
  }

  return redirect("/posts/admin");
};

const inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;

export default function NewPost() {
  const data = useLoaderData() as LoaderData;
  const errors = useActionData() as ActionData;

  const isNewPost = !data.post;

  const navigation = useNavigation();
  const isSubmitting = Boolean(navigation.state === "submitting");

  return (
    <Form method="post" key={data.post?.slug ?? "new"}>
      <fieldset>
        <label>
          Post Title:{" "}
          {errors?.title ? (
            <em className="text-red-600">{errors.title}</em>
          ) : null}
          <input
            type="text"
            name="title"
            className={inputClassName}
            defaultValue={data.post?.title}
          />
        </label>
      </fieldset>
      <fieldset>
        <label>
          Post Slug:{" "}
          {errors?.slug ? (
            <em className="text-red-600">{errors.slug}</em>
          ) : null}
          <input
            type="text"
            name="slug"
            className={inputClassName}
            defaultValue={data.post?.slug}
          />
        </label>
      </fieldset>
      <fieldset>
        <label htmlFor="markdown">
          Markdown:{" "}
          {errors?.markdown ? (
            <em className="text-red-600">{errors.markdown}</em>
          ) : null}
        </label>
        <br />
        <textarea
          id="markdown"
          rows={20}
          name="markdown"
          className={`${inputClassName} font-mono`}
          defaultValue={data.post?.markdown}
        />
      </fieldset>
      <div className="flex justify-end gap-4">
        {isNewPost ? null : (
          <button
            type="submit"
            name="intent"
            value="delete"
            className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 focus:bg-red-400 disabled:bg-red-300"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Deleting..." : "Delete"}
          </button>
        )}
        <button
          type="submit"
          name="intent"
          value={isNewPost ? "create" : "update"}
          className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
          disabled={isSubmitting}
        >
          {isNewPost ? (isSubmitting ? "Creating..." : "Create Post") : null}
          {isNewPost ? null : isSubmitting ? "Updating..." : "Update"}
        </button>
      </div>
    </Form>
  );
}

export function ErrorBoundary() {
  const error = useRouteError();

  if (isRouteErrorResponse(error)) {
    console.error(error);
    const status = error.status;
    return (
      <div id="error-page">
        <h1>Oops! {status}</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>
            {error.statusText || (error.data?.message && error.data?.message)}
          </i>
        </p>
      </div>
    );
  } else if (error instanceof Error) {
    return (
      <div id="error-page">
        <h1>Oops! Unexpected Error</h1>
        <p>Something went wrong.</p>
        <p>
          <i>{error.message}</i>
        </p>
      </div>
    );
  } else {
    return <></>;
  }
}
