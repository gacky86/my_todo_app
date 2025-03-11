// 役割：deadlineフォームを表示すること

// React関係
import PropTypes from 'prop-types';

// Flatpickr
import 'flatpickr/dist/flatpickr.min.css'
import Flatpickr from 'react-flatpickr'
import { format } from "date-fns";

const DeadlineForm = ({taskState}) => {
  const {taskObj, setTaskObj} = taskState;

  const handleDateChange = (date) => {
    // flatpickrで取得されるDate ObjectはActiveRecordのdate型に変換する必要がある
    const selectedDate = format(date[0], "yyyy-MM-dd");
    setTaskObj({...taskObj, deadline: selectedDate});
  }

  return (
    <>
      <label htmlFor="deadline">Deadline: </label>
      <Flatpickr id="deadline" value={taskObj.deadline} options={{dateFormat: 'Y/m/d(D)'}} onChange={(e) => handleDateChange(e)}/>
    </>
  )

}

// propTypes definitions
DeadlineForm.propTypes = {
  taskState: PropTypes.object.isRequired
}

export default DeadlineForm
