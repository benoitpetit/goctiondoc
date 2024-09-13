<template>
  <div class="feedback-component">
    <p>Was this page helpful?</p>
    <button @click="sendFeedback(true)">👍 Yes</button>
    <button @click="sendFeedback(false)">👎 No</button>
    <p v-if="feedbackSent">Thank you for your feedback!</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      feedbackSent: false,
    };
  },
  methods: {
    sendFeedback(isHelpful) {
      // Here you would typically send this feedback to your server
      console.log(`Feedback sent: ${isHelpful ? "Helpful" : "Not helpful"}`);
      this.feedbackSent = true;
    },
  },
};
</script>

<style scoped>
.feedback-component {
  margin-top: 2rem;
  padding: 1rem;
  border: 1px solid #eaecef;
  border-radius: 4px;
}
button {
  margin-right: 0.5rem;
}
</style>
