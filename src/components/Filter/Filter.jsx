import { SectionFilter, Label, Input } from './Filter.styled';
import { PropTypes } from 'prop-types';

const Filter = ({ value, onChengeFilter }) => {
  return (
    <SectionFilter>
      <Label>Filter</Label>
      <Input type="text" value={value} onChange={onChengeFilter} />
    </SectionFilter>
  );
};

Filter.prototype = {
  value: PropTypes.string,
  onChengeFilter: PropTypes.func,
};

export default Filter;
