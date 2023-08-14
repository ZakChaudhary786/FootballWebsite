import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebook, faInstagram, faTiktok } from '@fortawesome/free-brands-svg-icons';
import { faFutbol, faPeopleGroup, faTrophy, faBullseye, faCircleCheck } from '@fortawesome/free-solid-svg-icons';

export function FutbolIcon() {
    return <FontAwesomeIcon icon={faFutbol} />;
}

export function TeamIcon() {
    return <FontAwesomeIcon icon={faPeopleGroup}/>;
}

export function TrophyIcon() {
    return <FontAwesomeIcon icon={faTrophy} size="3x" className="featureIcons"/>;
}

export function BullseyeIcon() {
    return <FontAwesomeIcon icon={faBullseye} size="3x" className="featureIcons"/>;
}

export function CheckIcon() {
    return <FontAwesomeIcon icon={faCircleCheck} size="3x" className="featureIcons"/>;
}

export function TwitterIcon() {
    return <FontAwesomeIcon icon={faTwitter} size="3x" className="footerIcons" onClick={() => window.open("https://twitter.com/LFC", "_blank")} />;
}

export function FacebookIcon() {
    return <FontAwesomeIcon icon={faFacebook} size="3x" className="footerIcons" onClick={() => window.open("https://www.facebook.com/LiverpoolFC/", "_blank")} />;
}

export function InstagramIcon() {
    return <FontAwesomeIcon icon={faInstagram} size="3x" className="footerIcons" onClick={() => window.open("https://www.instagram.com/liverpoolfc/", "_blank")} />;
}

export function TiktokIcon() {
    return <FontAwesomeIcon icon={faTiktok} size="3x" className="footerIcons" onClick={() => window.open("https://www.tiktok.com/@liverpoolfc", "_blank")} />;
}