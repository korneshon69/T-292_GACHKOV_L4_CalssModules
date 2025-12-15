import Mark from './mark.js';

class AdvancedMark extends Mark {
  constructor(subject, score, date, comment = '') {
    super(subject, score, date);
    this._comment = comment;
  }

  get comment() {
    this._ensureNotDeleted();
    return this._comment;
  }

  set comment(value) {
    this._ensureNotDeleted();
    this._comment = String(value);
  }

  show() {
    this._ensureNotDeleted();
    console.log({
      subject: this._subject,
      score: this._score,
      date: this._date,
      gradeLabel: this._gradeLabel(),
      comment: this._comment,
    });
  }

  delete() {
    super.delete();
    this._comment = undefined;
    return null;
  }

  copy() {
    this._ensureNotDeleted();
    return this;
  }

  static clone(markInstance) {
    if (!(markInstance instanceof AdvancedMark)) {
      throw new TypeError('clone expects an AdvancedMark instance');
    }
    markInstance._ensureNotDeleted();
    return new AdvancedMark(
      markInstance._subject,
      markInstance._score,
      new Date(markInstance._date),
      markInstance._comment
    );
  }
}

export default AdvancedMark;
