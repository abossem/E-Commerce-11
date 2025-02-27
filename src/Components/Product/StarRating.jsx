import { Star } from "lucide-react";
import PropTypes from 'prop-types';


const StarRating = ( { rating } ) => (
  <div className="flex">
    { [ ...Array( 5 ) ].map( ( _, i ) => (
      <Star key={ i } color="#FF9900" fill={ i < rating ? "#FFCC00" : "none" } size={ 16 } />
    ) ) }
  </div>
);

StarRating.propTypes = {
  rating: PropTypes.number.isRequired
};

export default StarRating;