var Component = (function() {
  function controller() {
    var vnode = {
      state: {}
    };
    oninit(vnode);
    return {state: vnode.state};
  }

  function oninit(vnode) {
    vnode.state.name = stream('');
  }

  function view(vnode, attrs) {
    vnode.attrs = vnode.attrs /* Mithril 1.x */ || attrs; /* Mithril 0.2 */
    return m('main', [
      m('h1', 'Hello ' + vnode.state.name()),
      m('input', {oninput: m.withAttr('value', vnode.state.name)})
    ]);
  }

  return {
    controller,
    oninit,
    view
  };
})();
