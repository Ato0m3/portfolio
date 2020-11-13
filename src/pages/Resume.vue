<template>
  <Layout title="Resume">
    <div class="mb-8" v-for="(item, index) in items" v-bind:key="index">
      <div class="text-text-primary text-2xl mt-4 mb-2">    
        <font-awesome
        class="text-primary"
        :icon="['fas', item.icon]"
        size="lg"
        />
        {{ item.title }}
      </div>
      <ul>
        <li class="mb-2" v-for="(item, index) in item.subItems" v-bind:key="index">
          <span class="text-text-disabled"> > {{item.title}} </span>
          <span class="">{{item.desk}} </span>
          <span class="text-secondary">{{item.sub}}</span>
        </li>
      </ul>
    </div>
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Resume",
  },
  data() {
    return {
      items: [{
          title: "Professional experiences",
          icon: "briefcase",
          subItems: [
            {title: "September 2019-now", desk: "Sandwich course  in a scrum team as a Full-Stack developer at", sub:"Thales AVS"},
            {title: "July-August 2018", desk: "Developer internship planned in the start-up at ", sub:"La Fabrique à innovations in Toulouse (31)"},
          ] 
        },
        {
          title: "Education and training",
          icon: "graduation-cap",
          subItems: [
            {title : "2019-now", desk: "Three-year engineering degree in IT", sub: " ENSEEIHT Toulouse"},
            {title : "2017-2019", desk: "Two-year technician university degree in IT", sub: "IUT Blagnac"},
            {title : "2016-2017", desk: "Integrated preparatory classes", sub: "EISTI Pau"},
            {title : "2015-2016", desk: " General Secondary school leaving certificate in science (European mention : Spanish)", sub: "High School Michelet"},
          ],
        },
        {
          title: "Languages",
          icon: "language",
          subItems: [
            {title: "English", desk: "Fluent level"},
            {title: "Spanish", desk: "Average level, European Mention"},
          ] 
        },
        {
          title: "Interests",
          icon: "running",
          subItems: [
            {desk: "Graphism (Photoshop et drawing), Programming, Reading"},
            {title: "Sports: ", desk: "Climbing, Mountaineering"},
          ] 
        }
      ]
    }
  }
};
</script>
