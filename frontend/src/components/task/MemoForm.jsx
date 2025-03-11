// 役割：memoフォームを表示すること
// React関係
import PropTypes from 'prop-types';

const MemoForm = ({taskState}) => {
  const {taskObj, setTaskObj} = taskState;

  return (
    <>
      <label htmlFor="memo">Memo: </label>
      <input type="text" id="memo" name="memo" value={taskObj.memo} onChange={(e) => setTaskObj({...taskObj, memo: e.target.value})} />
    </>
  )
}

// propTypes definitions
MemoForm.propTypes = {
  taskState: PropTypes.object.isRequired
}

export default MemoForm
