<template>
  <div>
    <h2>Title: {{ blog.title }}</h2>
    <p>
      Content:
      <span v-if="isExpanded">
        {{ blog.content }}
      </span>
      <span v-else>
        {{ truncatedContent }}
      </span>
      <button
        v-if="isTruncated"
        @click="toggleExpand"
        class="expand-button"
      >
        {{ isExpanded ? 'See Less' : 'See More' }}
      </button>
    </p>
    <p>Author: {{ blog.author }}</p>
    <div class="actions">
      <router-link
        :to="'/update/' + blog.id"
        class="action-link"
      >
        Update
      </router-link>
      <button
        @click="deleteBlog"
        class="action-button"
      >
        Delete
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { defineProps, defineEmits, ref, computed } from 'vue'
  import { supabase } from '@/supabaseClient'

  const props = defineProps({
    blog: {
      type: Object,
      required: true,
    },
  })

  const emit = defineEmits(['blogDeleted'])

  const isExpanded = ref<boolean>(false)

  const truncatedContent = computed(() => {
    return props.blog.content.length > 500
      ? props.blog.content.slice(0, 500) + '...'
      : props.blog.content
  })

  const isTruncated = computed(() => props.blog.content.length > 500)

  const toggleExpand = () => {
    isExpanded.value = !isExpanded.value
  }

  const deleteBlog = async () => {
    try {
      const { error } = await supabase
        .from('blogs')
        .delete()
        .eq('id', props.blog.id)

      if (error) {
        throw error
      }

      emit('blogDeleted')
    } catch (error) {
      console.error('Error deleting blog:', error.message)
    }
  }
</script>

<style scoped>
  div {
    margin: 0.25rem auto;
    padding: 0.25rem;
    border: 1px solid black;
    border-radius: 6px;
    background: #fff;
  }

  h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #333;
  }

  p {
    font-size: 1rem;
    margin: 0.75rem 0;
    color: #555;
  }

  .actions {
    display: flex;
    justify-content: space-between;
    gap: 0.75rem;
    margin-top: 1.5rem;
  }

  .action-link,
  .action-button {
    text-decoration: none;
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 4px;
    text-align: center;
    font-size: 0.875rem;
    font-weight: 600;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  .action-link {
    background: linear-gradient(45deg, #007bff, #0056b3);
    color: white;
    border: 1px solid transparent;
  }

  .action-link:hover {
    background: linear-gradient(45deg, #0056b3, #007bff);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .action-button {
    background: #ffffff;
    color: #333;
    border: 1px solid #333;
  }

  .action-button:hover {
    background: #f0f0f0;
    color: #000;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    transform: translateY(-2px);
  }

  .expand-button {
    background: none;
    border: none;
    color: #007bff;
    font-size: 1rem;
    cursor: pointer;
    padding: 0;
    margin: 0;
  }

  .expand-button:hover {
    text-decoration: underline;
  }
</style>
