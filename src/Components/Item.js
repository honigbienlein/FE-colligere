import React from 'react'
import { useParams } from 'react-router';
import '../css/item.css'

export default function Item() {

    const { collectionId } = useParams();
    const { itemId } = useParams();
    
  return (
    <>
        <div className="item">
            {/* TBD: get itemname */}
            <h1>itemName</h1>
            <div className="itemTop">
                <div className="itemTopLeft">
                    <img src="/images/book.jpeg"/>
                </div>
                <div className="itemTopRight">
                    <h4>Have I read this?</h4>
                    <img src="/images/yes.png" />
                    <h4>Title</h4>
                    <p>JavaScript - The Definitive Guide</p>
                    <h4>Author</h4>
                    <p>David Flanagan</p>
                    <h4>Genre</h4>
                    <p>Publicaton date</p>
                    <h4>01.01.2020</h4>
                    <p>Thriller</p>
                </div>
            </div>
            <div className="itemBottom">
                <h4>Summary</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem dolores cum corporis, dolore, ducimus iusto tempora illum earum ipsam, fugit natus temporibus dolor blanditiis consequuntur? Illo dolores assumenda nemo tenetur!</p>
                <h4>Commentar</h4>
                <p>I love this book, it is so exciting! A must have. The best book I have ever read!!!</p>
            </div>
        </div>
    </> 
  )
}
