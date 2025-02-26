import { Star } from "lucide-react";

const StarRating = ( { rating } ) => (
  <div className="flex">
    { [ ...Array( 5 ) ].map( ( _, i ) => (
      <Star key={ i } color="#FF9900" fill={ i < rating ? "#FFCC00" : "none" } size={ 16 } />
    ) ) }
  </div>
);

export default StarRating;
