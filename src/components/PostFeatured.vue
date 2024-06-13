<script lang="ts">
import { usePostsStore } from '@/stores/posts';
import { useCategoriesStore } from '@/stores/categories';
import { mapState } from 'pinia';

export default {
	computed: {
		...mapState(usePostsStore, ['posts']),
		...mapState(useCategoriesStore, ['categories'])
	},

	methods: {
		goToPost(id: number) {
			this.$router.push({
				name: "single-post",
				params: { id },
			});
		},
	}

}
</script>

<template lang="">
	<div class="post_deskt">
		<div class="post_tipped">
			<div class="card_post" v-for="post in posts" :key="post.id" @click="goToPost(post.id)">
				<div v-for="category in categories" :key="category.id">
					<div v-if="post.categoryId === category.id">
						<img :src="post.image" alt="FiduOccidente" />
						<div class="cardp_body">
							<h4>{{ post.date}}</h4>
							<h3>{{ category.name}}</h3>
							<h2>{{ post.name}}</h2>
						</div>
					</div>
				</div>
			</div>			
		</div>
	</div>
</template>

<!-- <script lang="ts">
import { usePostsStore } from '@/stores/posts';
import { useCategoriesStore } from '@/stores/categories';
import { mapState } from 'pinia';

export default {
  data() {
    return {
      postsToShow: 3, 
      isMobile: false,
    };
  },

  computed: {
    ...mapState(usePostsStore, ['posts']),
    ...mapState(useCategoriesStore, ['categories']),

    filteredPosts() {
      const selectedCategoryId = this.$route.params.categoryId; 
      if (selectedCategoryId) {
        return this.posts
          .filter(post => post.categoryId === Number(selectedCategoryId))
          .sort((a, b) => Stringnew Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente
      } else {
        return this.posts.sort((a, b) => new Date(b.date) - new Date(a.date)); // Ordenar por fecha descendente
      }
    },

    visiblePosts() {
      const postsCount = this.postsToShow;
      return this.filteredPosts.slice(0, postsCount);
    }
  },

  methods: {
    goToPost(id: number) {
      this.$router.push({
        name: "single-post",
        params: { id },
      });
    },

    getCategory(post) {
      return this.categories.find(category => category.id === post.categoryId);
    },

    loadMorePosts() {
      const increment = this.isMobile ? 1 : 3;
      if (this.postsToShow < this.filteredPosts.length) {
        this.postsToShow += increment;
      }
    },

    handleScroll() {
      const bottomOfWindow = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight - 100; 
      if (bottomOfWindow) {
        this.loadMorePosts();
      }
    },

    checkIfMobile() {
      this.isMobile = window.innerWidth <= 768;
      this.postsToShow = this.isMobile ? 1 : 3;
    }
  }
}
</script>
<template>
  <div class="post_deskt">
    <div class="post_tipped">
      <div class="card_post" v-for="post in visiblePosts" :key="post.id" @click="goToPost(post.id)">
        <div v-if="getCategory(post) && post.type === 1">
          <img :src="post.image" alt="FiduOccidente" />
          <div class="cardp_body">
            <h4>{{ post.date }}</h4>
            <h3>{{ getCategory(post).name }}</h3>
            <h2>{{ post.name }}</h2>
          </div>
        </div>
      </div>
    </div>
    <button @click="loadMorePosts" v-if="postsToShow < filteredPosts.length" class="load-more-btn"><img src="/public/img/more.svg"></button>
  </div>
</template>


 -->
