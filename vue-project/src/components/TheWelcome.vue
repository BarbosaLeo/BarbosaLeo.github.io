<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SkillsIcon from './icons/IconSkills.vue'
</script>

<template>
  <WelcomeItem>
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>School Background</template>
    <ul>
      <li>Bachelor's Degree in Game Design</li>
    </ul>

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <ToolingIcon />
    </template>
    <template #heading>Professional Experience</template>

    <ul>
      <li>Accenture Song - Material Designer</li>
      Jul/22 - Moment<br/>
      Texturing and rendering of assets for multiple internal projets, UV unwrapping for AR projects.
      Orientation for new trainees.
      
      <li>CreativeDrive - Design Intern</li>
      Jan/21 - Jun/22
    </ul>
    <br />

  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <SkillsIcon />
    </template>
    <template #heading>Skills and Competences</template>

    <ul>
      <li>3D Modeling and Texturing</li>
      <li>Game Development with Unity Engine</li>
      <li>Object Oriented Programming</li>
      <li>Solid C# and Java knowledge</li>
      <li>JavaScript and TypeScript Web Development</li>
    </ul>
    
  </WelcomeItem>

  <WelcomeItem>
    <template #icon>
      <CommunityIcon />
    </template>
    <template #heading>Personal Contact</template>

    You can contact me here <br/> 
    <a href="https://www.linkedin.com/in/leonardo-nascimento-barbosa/">LinkedIn</a>
    <a href="https://github.com/BarbosaLeo">GitHub</a>
    <a href="https://barbosaleo.itch.io/">Itchio</a>
  </WelcomeItem>

  <!--
  <WelcomeItem>
    <template #icon>
      <SupportIcon />
    </template>
    <template #heading>Support Vue</template>

    As an independent project, Vue relies on community backing for its sustainability. You can help
    us by
    <a href="https://vuejs.org/sponsor/" target="_blank" rel="noopener">becoming a sponsor</a>.
  </WelcomeItem>
  -->
  
</template>
