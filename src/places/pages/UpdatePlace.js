import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/validators";
import { useForm } from "../../shared/hooks/form-hook";

import "./PlaceForm.css";
import Card from "../../shared/components/UIElements/Card";

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
const UpdatePlace = () => {
  const placeId = useParams().placeId;
  const [isLoading, setIsLoading] = useState(true);
  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );
  const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  useEffect(() => {
    if (identifiedPlace) {
      setFormData(
        {
          title: {
            value: identifiedPlace.title,
            isValid: true,
          },
          description: {
            value: identifiedPlace.description,
            isValid: true,
          },
        },
        true
      );
      setIsLoading(false);
    }
  }, [setFormData, identifiedPlace]);
  if (!identifiedPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Could not find the place.</h2>
        </Card>
      </div>
    );
  }
  const placeUpdateSubmitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };
  if (isLoading) {
    return (
      <div className="center">
        <h2>Loading...</h2>
      </div>
    );
  }
  return (
    <form className="place-form" onSubmit={placeUpdateSubmitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Plz enter a valid title."
        initialValue={formState.inputs.title.value}
        initialIsValid={formState.inputs.title.isValid}
        onInput={inputHandler}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_REQUIRE(), VALIDATOR_MINLENGTH(5)]}
        errorText="Plz enter a valid description (minimum 5 character)."
        initialValue={formState.inputs.description.value}
        initialIsValid={formState.inputs.description.isValid}
        onInput={inputHandler}
      />
      <Button type="Submit" disabled={!formState.isValid}>
        Update Place
      </Button>
    </form>
  );
};

export default UpdatePlace;
