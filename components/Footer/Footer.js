import './Footer.css';
import { SOCIAL_NETWORK } from '../../constants';

const template = () => {
    return `
        <ul class="flex-container-row">
            ${SOCIAL_NETWORK.map((social) => {
                return `
                    <li>
                        <a href=${social.url} target="_blank">
                            <img src=${social.icon} alt=${social.id} />
                        </a>   
                    </li>
                `
            }).join("")}
        </ul>
        <p>Create with 💝 by Claudia Palmerini</p>
    `
}

const footer = () => {

    document.querySelector('footer').innerHTML = template();
}

export default footer;