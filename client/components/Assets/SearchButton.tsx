import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import styled from "styled-components";


function SearchButton (props) {
    
    return (
        <Search>
        <Form className="d-flex">
        <FormControl
          placeholder="Search Asset"
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
  display: flex;
  padding: 5px 19px;
`;

export default SearchButton