import React, { useState } from 'react';

function Card() {
    const [Price1, SetPrice1] = useState("199.99")
    const [Price2, SetPrice2] = useState("249.99")
    const [Price3, SetPrice3] = useState("399.99")

    window.onload = function() {
        const type = document.querySelector('#type');
        type.addEventListener('change', function() {
            if (this.checked) {
                SetPrice1("19.99")
                SetPrice2("24.99")
                SetPrice3("39.99")
            } else {
                SetPrice1("199.99") 
                SetPrice2("249.99")
                SetPrice3("399.99")
            }
        });
    }
    
    return (
        <section>
            <article>
                <h2 class="card-title">Basic</h2>
                <p>$<strong>{ Price1 }</strong></p>
                    <ol>
                        <li>500 GB Storage</li>
                        <li>2 Users Allowed</li>
                        <li>Send up to 3 GB</li>
                    </ol>
                <div class="button">
                    <a href="#learnmore">Learn More</a>
                </div>
            </article>
            <article class="highlight">
                <h2 class="card-title">Professional</h2>
                <p>$<strong>{ Price2 }</strong></p>
                    <ol>
                        <li>1 TB Storage</li>
                        <li>5 Users Allowed</li>
                        <li>Send up to 10 GB</li>
                    </ol>
                <div class="button">
                    <a href="#learnmore">Learn More</a>
                </div>
            </article>
            <article>
                <h2 class="card-title">Master</h2>
                <p>$<strong>{ Price3 }</strong></p>
                    <ol>
                        <li>2 TB Storage</li>
                        <li>10 Users Allowed</li>
                        <li>Send up to 20 GB</li>
                    </ol>
                <div class="button">
                    <a href="#learnmore">Learn More</a>
                </div>
            </article>
        </section>
    ) 
}

export default Card