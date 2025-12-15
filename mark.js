export default class Mark {
  constructor(subject = 'Mathematics', score = 5, date = new Date()) {
    this._subject = subject;
    this._score = score;
    this._date = date;
    this._deleted = false;
  }

  get subject() {
    this._ensureNotDeleted();
    return this._subject;
  }

  set subject(value) {
    this._ensureNotDeleted();
    this._subject = String(value);
  }

  get score() {
    this._ensureNotDeleted();
    return this._score;
  }

  set score(value) {
    this._ensureNotDeleted();
    const numeric = Number(value);
    if (Number.isNaN(numeric)) {
      throw new TypeError('Score must be a number');
    }
    this._score = numeric;
  }

  get date() {
    this._ensureNotDeleted();
    return this._date;
  }

  set date(value) {
    this._ensureNotDeleted();
    const parsed = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(parsed.getTime())) {
      throw new TypeError('Invalid date');
    }
    this._date = parsed;
  }

  show() {
    this._ensureNotDeleted();
    console.log({
      subject: this._subject,
      score: this._score,
      date: this._date,
      gradeLabel: this._gradeLabel(),
    });
  }

  delete() {
    this._deleted = true;
    this._subject = undefined;
    this._score = undefined;
    this._date = undefined;
    return null;
  }

  copy() {
    this._ensureNotDeleted();
    return this;
  }

  static clone(markInstance) {
    if (!(markInstance instanceof Mark)) {
      throw new TypeError('clone expects a Mark instance');
    }
    markInstance._ensureNotDeleted();
    return new Mark(markInstance._subject, markInstance._score, new Date(markInstance._date));
  }

  _ensureNotDeleted() {
    if (this._deleted) {
      throw new Error('Этот экземпляр Mark был удалён');
    }
  }

  _gradeLabel() {
    if (this._score >= 9) return 'Отлично';
    if (this._score >= 7) return 'Хорошо';
    if (this._score >= 5) return 'Удовлетворительно';
    return 'Неудовлетворительно';
  }
}
