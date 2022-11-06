import React, { useState } from "react";
// import TextField from '@mui/material/TextField';
// import { LocalizationProvider } from '@mui/x-date-pickers-pro';
// import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
// import { AdapterDateFns } from '@mui/x-date-pickers-pro/AdapterDateFns';
// import Box from '@mui/material/Box';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from "react-dates";
import DatePicker from "react-datepicker";

const ReservationCalendar = (props) => {
  // const [startDate, setStartDate] = useState(new Date());
  // const [endDate, setEndDate] = useState(new Date());

  const [state, setState] = useState({
    startDate: null,
    endDate: null,
  });
  
// function ReservationCalendar() {
//   const [startDate, setStartDate] = useState(null);
//   const [endDate, setEndDate] = useState(null);
//   const [focusedInput, setFocusedInput] = useState(null);
//   const handleDatesChange = ({ startDate, endDate }) => {
//     setStartDate(startDate);
//     setEndDate(endDate);
//   };
//   return (
//     <div className="App">
//       <DateRangePicker
//         startDate={startDate}
//         startDateId="start-date"
//         endDate={endDate}
//         endDateId="end-date"
//         onDatesChange={handleDatesChange}
//         focusedInput={focusedInput}
//         onFocusChange={focusedInput => setFocusedInput(focusedInput)}
//       />
//     </div>
//   );
// }

  // const onDatesChange = (startDate, endDate) => {
  //   // const { stateDateWrapper } = props
  //   setReservationDate({
  //     startDate: startDate,
  //     endDate: endDate
  //   });
  // };

  // const onFocusChange = (focusedInput) => {
  //   setReservationDate({
  //     focusedInput
  //   })
  // }

  // const selectionRange = {
  //   startDate: startDate,
  //   endDate: endDate,
  //   key: 'selection',
  // }

  // const handleSelect = ranges => {
  //   setStartDate(ranges.selection.startDate);
  //   setEndDate(ranges.selection.endDate);
  // }

  // startDate, endDate, onDatesChange, focusedInput, onFocusChange
  
  return (
    <DateRangePicker
      startDate={state.startDate} // momentPropTypes.momentObj or null,
      startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
      endDate={state.endDate} // momentPropTypes.momentObj or null,
      endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
      onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
      focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
      onFocusChange={focusedInput => setState({ focusedInput })} // PropTypes.func.isRequired,
    />
    
    // <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
  );
};

// const ReservationCalendar = () => {
//   const [value, setValue] = useState([null, null]);

//   return (
//     <LocalizationProvider
//       dateAdapter={AdapterDateFns}
//       localeText={{ start: 'Check-in', end: 'Check-out' }}
//     >
//       <DateRangePicker
//         value={value}
//         onChange={(newValue) => {
//           setValue(newValue);
//         }}
//         renderInput={(startProps, endProps) => (
//           <>
//             <TextField {...startProps} />
//             <Box sx={{ mx: 2 }}> to </Box>
//             <TextField {...endProps} />
//           </>
//         )}
//       />
//     </LocalizationProvider>
//   );
// }

export default ReservationCalendar;