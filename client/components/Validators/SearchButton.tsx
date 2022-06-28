import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import styled from "styled-components";


function SearchButton (props) {
    
    return (
        <Search>
        <Form className="d-flex">
        <FormControl
          placeholder="Search Validators"
          className="me-2"
          aria-label="Search"
          name='search'
          onChange={event => props.setQuery(event.target.value)}
        />
        </Form>
        </Search>
       
    )
}

const Search = styled.div`
  margin-left: 700px;
  display: flex;
  padding: 5px 19px;
  align-items: center;
  min-width: 280px;
`;

export default SearchButton