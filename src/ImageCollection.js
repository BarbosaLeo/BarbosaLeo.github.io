
export default function ImageCollection(props){
    return(
        <li>
            <img
                src={props.imageURL} 
                alt={props.alt}
            />
        </li>
    );
}
