<template>
  <div class="resources">
    <h2 id="resources" class="resources_title">Resources</h2>
    <div class="resources_container">
      <div class="resources_content">
        <ul class="resource_list">
          <li>
            <a
              class="resources_link"
              href="https://www.w3.org/WAI/standards-guidelines/#wcag"
              rel="noopener noreferrer"
              target="_blank"
            >W3C (World Wide Web Consortium) Accessibility Standards
              Overview</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://www.w3.org/TR/WCAG21/"
              rel="noopener noreferrer"
              target="_blank"
            >Web Content Accessibility Guidelines (WCAG) 2.1</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/standards/wcag/checklist"
              rel="noopener noreferrer"
              target="_blank"
            >WebAIM's WCAG 2 Checklist</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/resources/contrastchecker/AccessibilityResources.vue"
              rel="noopener noreferrer"
              target="_blank"
            >WebAim Color Contrast Tool</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/resources/linkcontrastchecker/AccessibilityResources.vue"
              rel="noopener noreferrer"
              target="_blank"
            >Link Contrast checker</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://colororacle.org/"
              rel="noopener noreferrer"
              target="_blank"
            >Color Oracle</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/techniques/fonts/"
              rel="noopener noreferrer"
              target="_blank"
            >WebAIM Fonts</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://fonts.google.com/"
              rel="noopener noreferrer"
              target="_blank"
            >Google Fonts</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://webaim.org/techniques/writing/"
              rel="noopener noreferrer"
              target="_blank"
            >Writing Clearly and Simply</a>
          </li>
          <li>
            <a
              class="resources_link"
              href="https://dequeuniversity.com/assets/html/jquery-summit/html5/slides/landmarks.html"
              rel="noopener noreferrer"
              target="_blank"
            >Landmarks</a>
          </li>
          <li>
            <a
              class="resources_link" href="https://www.w3.org/TR/wai-aria/"
              rel="noopener noreferrer" target="_blank">ARIA</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AccessibilityResources"
};
</script>

<style lang="scss">
@import "../styles/main.scss";

.resources {
  background-color: $grayLight;
  margin: auto;
  }

.resources_title {
  color: $subHeader;
  padding: 1em 0;
  margin: 0 auto;
  font-family: $subHeaderFont;
  }

.resources_container {
  padding: 0 1em 1.5em;
  color: $subcontent;
  font-family: $subcontentFont;
  }

.resources_lists_title {
  color: $greenLight;
  margin: 1em auto;
  font-weight: 900;
  font-size: 1.3em;
  }

.resource_list {
  list-style: none;
  margin: auto;
  padding: 0;
  }
</style>
