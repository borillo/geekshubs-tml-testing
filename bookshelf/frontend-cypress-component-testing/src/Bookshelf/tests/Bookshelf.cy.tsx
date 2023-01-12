/// <reference types="Cypress" />

import React from "react";
import App from "../../App";
import Bookshelf from "../components/Bookshelf";

import fakeData from "../pageobjects/BookshelfFakeData";
import BookshelfPageObject from "../pageobjects/BookshelfPageObject";
import BookshelfPageObjectRTL from "../pageobjects/BookshelfPageObjectRTL";

import { mount } from "cypress/react";
import "@testing-library/cypress";

declare global {
  namespace Cypress {
    interface Chainable {
      mount: typeof mount;
    }
  }
}

describe("Main app", () => {
  it("should render the main menu", () => {
    cy.mount(<App />);

    cy.contains(/home/i);
    cy.contains(/bookshelf/i);
  });
});

describe("Bookshelf", () => {
  it("should render existing books", () => {
    cy.mount(<Bookshelf />);

    cy.contains(/clean code/i);
  });

  it("should allow to add new books", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageObject = new BookshelfPageObject(<Bookshelf />);
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);
  });

  it("should allow to add new books", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageObject = new BookshelfPageObject(<Bookshelf />);
    pageObject.fillForm(title, author);
    pageObject.submitForm();

    cy.contains(`${title} (${author})`);
  });

  it("should allow to add new books - cy/rtl", () => {
    const title = fakeData.generateTitle();
    const author = fakeData.generateAuthor();

    const pageobjects = new BookshelfPageObjectRTL(<Bookshelf />);
    pageobjects.fillForm(title, author);
    pageobjects.submitForm();

    cy.findByText(`${title} (${author})`).should("exist");
  });
});
