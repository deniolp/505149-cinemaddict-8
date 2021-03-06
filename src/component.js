export default class Component {
  constructor() {
    if (new.target === Component) {
      throw new Error(`Can't instantiate Component, only concrete one.`);
    }

    this._element = null;
  }

  get element() {
    return this._element;
  }

  get template() {
    throw new Error(`You have to define template.`);
  }

  render() {
    this._element = this.template;
    this._addListeners();
    return this._element;
  }

  unrender() {
    this._removeListeners();
    this._element = null;
  }

  rerender() {
    this._removeListeners();
    this._element.innerHTML = this.template.innerHTML;
    this._addListeners();
  }

  _getElements() {}
  _addListeners() {}
  _removeListeners() {}
}
