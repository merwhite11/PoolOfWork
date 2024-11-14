const firstVideoSelector = '[data-testid="carousel-video-0"]'

describe("VideoPlayer Component", () => {
  const videoName = "malamente"; // Replace with an actual video name for testing

  beforeEach(() => {
    // visit base_url configured for dev and prod
    cy.visit("/");
    cy.get("#dance-section").scrollIntoView();
  });

  it("loads and verifies the first video in the carousel", () => {
    const cdnUrl = Cypress.env("CDN_URL");
    const expectedHlsSource = `${cdnUrl}/malamente/hls/malamente.m3u8`;

    // Set up the intercept for the HLS request
    cy.intercept("GET", expectedHlsSource).as("hlsRequest");

    // Trigger the video loading in the carousel
    cy.get(firstVideoSelector).first().should("be.visible").scrollIntoView();

    // Wait for the HLS request and check if it matches the expected URL
    cy.wait("@hlsRequest").its("request.url").should("include", expectedHlsSource);
  });



  it("plays the video", () => {
    cy.get(firstVideoSelector).first().scrollIntoView().should("be.visible");
    //play the video
    cy.get(firstVideoSelector).then((video) => {
      video[0].play();
    })
    cy.get(firstVideoSelector).first().should("have.prop", "paused", false);
  });
});