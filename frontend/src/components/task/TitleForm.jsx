// 役割：titleフォームを表示すること
// React関係
import PropTypes from 'prop-types';

const TitleForm = ({taskState}) => {
  const {taskObj, setTaskObj} = taskState;

  return (
    <>
      <label htmlFor="title">Title: </label>
      <input type="text" id="title" name="title" value={taskObj.title} onChange={(e) => setTaskObj({...taskObj, title: e.target.value})} />
    </>
  )
}

// propTypes definitions
TitleForm.propTypes = {
  taskState: PropTypes.object.isRequired
}

export default TitleForm
