import React from 'react';
import PropTypes from 'prop-types';
import TextInput from './TextInput';
import idgen from './idgen';

class DatePicker extends React.Component {
  constructor(props) {
    super(props);

    this.id = props.id || `datepicker${idgen()}`;
  }

  componentDidMount() {
    if (typeof M !== 'undefined') {
      const { onChange } = this.props;
      const elem = document.getElementById(this.id);
      const options = onChange
        ? { ...this.props.options, onSelect: onChange }
        : this.props.options;

      this.instance = M.Datepicker.init(elem, options);
    }
  }

  componentWillUnmount() {
    if (this.instance) {
      this.instance.destroy();
    }
  }

  render() {
    const { ...other } = this.props;

    return (
      <TextInput id={this.id} inputClassName="datepicker" {...this.props} />
    );
  }
}

DatePicker.propTypes = {
  /**
   * Event called when Time has been selected
   */
  onChange: PropTypes.func,
  /**
   * id passed to datepicker, also used for init method
   */
  id: PropTypes.string,
  /**
   * options passed to init method
   * more info: https://materializecss.com/pickers.html#date-picker
   */
  options: PropTypes.shape({
    /**
     * Automatically close picker when date is selected.
     */
    autoClose: PropTypes.bool,
    /**
     * The date output format for the input field value.
     * @default 'mmm dd, yyyy'
     */
    format: PropTypes.string,
    /**
     * Used to create date object from current input string.
     * @default null
     */
    parse: PropTypes.func,
    /**
     * The initial date to view when first opened.
     * @default null
     */
    defaultDate: PropTypes.any,
    /**
     * Make the defaultDate the initial selected value.
     * @default false
     */
    setDefaultDate: PropTypes.bool,
    /**
     * Prevent selection of any date on the weekend.
     * @default false
     */
    disableWeekends: PropTypes.bool,
    /**
     * Custom function to disable certain days.
     * @default null
     */
    disableDayFn: PropTypes.func,
    /**
     * First day of week (0: Sunday, 1: Monday etc).
     * @default 0
     */
    firstDay: PropTypes.number,
    /**
     * The earliest date that can be selected.
     * @default null
     */
    minDate: PropTypes.any,
    /**
     * The latest date that can be selected.
     * @default null
     */
    maxDate: PropTypes.any,
    /**
     * Number of years either side, or array of upper/lower range.
     * @default 10
     */
    yearRange: PropTypes.oneOfType([PropTypes.number, PropTypes.array]),
    /**
     * Changes Datepicker to RTL.
     * @default false
     */
    isRTL: PropTypes.bool,
    /**
     * Show month after year in Datepicker title.
     * @default false
     */
    showMonthAfterYear: PropTypes.bool,
    /**
     * Render days of the calendar grid that fall in the next or previous month.
     * @default false
     */
    showDaysInNextAndPreviousMonths: PropTypes.bool,
    /**
     * Specify a DOM element to render the calendar in, by default it will be placed before the input.
     * @default null
     */
    container: PropTypes.any,
    /**
     * Show the clear button in the datepicker.
     * @default false
     */
    showClearBtn: PropTypes.bool,
    /**
     * Internationalization options.
     * @default See i18n documentation.
     */
    i18n: PropTypes.shape({
      cancel: PropTypes.string,
      clear: PropTypes.string,
      done: PropTypes.string,
      previousMonth: PropTypes.string,
      nextMonth: PropTypes.string,
      months: PropTypes.arrayOf(PropTypes.string),
      monthsShort: PropTypes.arrayOf(PropTypes.string),
      weekdays: PropTypes.arrayOf(PropTypes.string),
      weekdaysShort: PropTypes.arrayOf(PropTypes.string),
      weekdaysAbbrev: PropTypes.arrayOf(PropTypes.string)
    }),
    /**
     * An array of string returned by `Date.toDateString()`, indicating there are events in the specified days.
     * @default []
     */
    events: PropTypes.arrayOf(PropTypes.string),
    /**
     * Callback function when date is selected, first parameter is the newly selected date.
     * @default null
     */
    onSelect: PropTypes.func,
    /**
     * Callback function when Datepicker is opened.
     * @default null
     */
    onOpen: PropTypes.func,
    /**
     * Callback function when Datepicker is closed.
     * @default null
     */
    onClose: PropTypes.func,
    /**
     * Callback function when Datepicker HTML is refreshed.
     * @default null
     */
    onDraw: PropTypes.func
  })
};

DatePicker.defaultProps = {
  options: {
    autoClose: false,
    format: 'mmm dd, yyyy',
    parse: null,
    defaultDate: null,
    setDefaultDate: false,
    disableWeekends: false,
    disableDayFn: null,
    firstDay: 0,
    minDate: null,
    maxDate: null,
    yearRange: 10,
    isRTL: false,
    showMonthAfterYear: false,
    showDaysInNextAndPreviousMonths: false,
    container: null,
    showClearBtn: false,
    i18n: {
      cancel: 'Cancel',
      clear: 'Clear',
      done: 'Ok',
      previousMonth: '‹',
      nextMonth: '›',
      months: [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
      ],
      monthsShort: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ],
      weekdays: [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
      ],
      weekdaysShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      weekdaysAbbrev: ['S', 'M', 'T', 'W', 'T', 'F', 'S']
    },
    events: [],
    onSelect: null,
    onOpen: null,
    onClose: null,
    onDraw: null
  }
};

export default DatePicker;
