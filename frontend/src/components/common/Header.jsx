import PropTypes from 'prop-types';

// style
import styled from 'styled-components'

const Header = styled.h2`
  font-weight: 200;
  color: #5c89c8;
  margin: 10px 20px;
  border-bottom: 0.5px solid #7aa7c7;
`

const CommonHeader = ({header}) => {
  return (
    <Header>
      {header}
    </Header>
  )
}

// propTypes definitions
CommonHeader.propTypes = {
  header: PropTypes.string.isRequired
}

export default CommonHeader
