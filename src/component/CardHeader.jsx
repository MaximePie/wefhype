import React from 'react';

export default function CardHeader({category}) {
  return (
    <div className="CardHeader">
      <div className="CardHeader__badge" style={{backgroundColor: categoryColor()}}>
        <i className={`fas fa-${categoryIcon()} CardHeader__badge-icon`}/>
        <span className="CardHeader__badge-wording">
          {category}
        </span>
      </div>
    </div>
  );

  /**
   * Returns the color associated to the category.
   */
  function categoryColor() {
    switch (category) {
      case "Psychologie":
        return "#edaa34";
      case "Cognitif":
        return "#edd259";
      case "Sociologique":
        return "#b1ed52";
      case "Bonnes pratiques":
        return "#4ced72";
      case "Frein":
        return "#ed7173";
      case "Exemple":
        return "#807bed";
      case "Memorisation":
        return "#d366ed";
      case "Personnalités":
        return "#d366ed";
      default:
        return "#ffffff";
    }
  }

  /**
   * Returns the icon assigned to the category.
   */
  function categoryIcon() {
    switch (category) {
      case "Psychologie":
        return "theater-masks";
      case "Cognitif":
        return "brain";
      case "Sociologique":
        return "users";
      case "Bonnes pratiques":
        return "star";
      case "Frein":
        return "anchor";
      case "Exemple":
        return "search";
      case "Memorisation":
        return "save";
      case "Personnalités":
        return "user-secret";
      default:
        return "star";
    }
  }
}
