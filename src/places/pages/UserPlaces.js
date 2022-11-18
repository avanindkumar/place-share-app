import React from "react";
import { useParams } from "react-router-dom";
import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Shri Kashi Vishwanath Temple",
    description:
      "Landmark riverside temple to Shiva, known for its 18th-century gold-plated spire and sacred well.",
    imageUrl:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/5ntgsglgvpgb6x0v_1639378537.jpeg",
    address: "Lahori Tola, Varanasi, Uttar Pradesh 221001",
    location: {
      lat: 25.3108532,
      lng: 82.9777193,
    },
    creator: "u1",
  },
  {
    id: "p1",
    title: "Shri Kashi Vishwanath Temple",
    description:
      "Landmark riverside temple to Shiva, known for its 18th-century gold-plated spire and sacred well.",
    imageUrl:
      "https://img.republicworld.com/republic-prod/stories/promolarge/xhdpi/5ntgsglgvpgb6x0v_1639378537.jpeg",
    address: "Lahori Tola, Varanasi, Uttar Pradesh 221001",
    location: {
      lat: 25.3108532,
      lng: 82.9777193,
    },
    creator: "u2",
  },
];

const UserPlaces = () => {
  const userId = useParams().userId;
  const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
  return <PlaceList places={loadedPlaces} />;
};

export default UserPlaces;
