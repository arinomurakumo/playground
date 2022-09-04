export const Tab: React.VFC = () => (
  <div>
    <label htmlFor="radio1">tab-1</label>
    <label htmlFor="radio2">tab-2</label>
    <label htmlFor="radio3">tab-3</label>
    <input type="radio" name="radio" id="radio1" className="peer peer-tab-1 hidden" defaultChecked />
    <input type="radio" name="radio" id="radio2" className="peer peer-tab-2 hidden" />
    <input type="radio" name="radio" id="radio3" className="peer peer-tab-3 hidden" />
    <div className="hidden peer-contents-1:block">contents1</div>
    <div className="hidden peer-contents-2:block">contents2</div>
    <div className="hidden peer-contents-3:block">contents3</div>
  </div>
)
