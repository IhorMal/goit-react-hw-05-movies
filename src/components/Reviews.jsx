
import { useParams } from "react-router-dom";
import { useState, useEffect} from 'react'
import { movieReviews } from "../Requests/Api"

export const Reviews = () => {
       const [reviews, setReviews] = useState(null);
    const { id } = useParams();

   

    useEffect(() => {
        movieReviews(id).then(pro => {
            setReviews(pro.results)
        });
        
    }, [id])

    if (!reviews) {
       return null 
    }
    console.log(reviews)
    return (
        <div>
            {reviews.length !== 0 ? (
            <ul>
                {reviews.map(({author, content, id}) => {
                   return <li key={id}>
                        <h5>Author: {author}</h5>
                        <p>{content}</p>
                    </li>
                })}
            </ul>
            ) : (<p>There are no reviews</p>)}
            
        </div>
        
    )
}