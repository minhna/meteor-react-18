import { Meteor } from "meteor/meteor";
import React from "react";
import { useTracker } from "meteor/react-meteor-data";
import { LinksCollection } from "../api/links";

export const Info = () => {
  const { loading, links } = useTracker(() => {
    const sub = Meteor.subscribe("links");
    return {
      loading: !sub.ready(),
      links: LinksCollection.find().fetch(),
    };
  }, []);

  return (
    <div>
      <h2>Learn Meteor!</h2>
      {loading && <div>Loading...</div>}
      <ul>
        {links.map((link) => (
          <li key={link._id}>
            <a href={link.url} target='_blank'>
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
