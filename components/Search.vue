<template>
    <div class="search-container">
      <div v-if="showSearchbar">
        <div class="form-container">
            <img src="/assets/icons/search.svg" alt="search icon" class="search-img" />
            <form action="" method="post" v-on:submit="handleSubmit">
                <input v-model="form.searchTerm" name="searchTerm" type="text" placeholder="Search for photos" />
            </form>
            <img v-if="form.searchTerm.length > 0" src="/assets/icons/cancel.svg" alt="cancel icon" class="search-img" @click="clearInput" />
        </div>
        <p class="form-error" v-if="v$.searchTerm.$error">{{ v$.searchTerm.$errors[0].$message  }}</p>
      </div>
      <div v-else  class="loading-container">
        <h1 v-html="searchResultsHeading" class="search-loader"></h1>
        <p @click="photoStore.returnToSearch">Back to search</p>
      </div>
    </div>
</template>

<script setup lang="ts">
import useValidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';

const photoStore = usePhotoStore();
const { showSearchbar, searchResultsHeading } = storeToRefs(photoStore);

const form = reactive({
    searchTerm: ""
});

const rules = computed(() => {
    return {
        searchTerm: { required },
    }
});

const v$ = useValidate(rules, form);

const clearInput = () => {
    form.searchTerm = "";
    v$.value.$reset();
}

const handleSubmit = (event: Event) => {
    event.preventDefault();
    
    // Form validation
    v$.value.$validate();

    if (!v$.value.$pending && v$.value.$error) {
      return;
    } else {
      photoStore.fetchPhotos(form.searchTerm);
    }
}


</script>

<style lang="scss" scoped>
.search-container {
    width: 90%;
    max-width: 1300px;
    margin: 0 auto;
    position: relative;
   
    .form-container {
      background-color: $white;
    border-radius: 4px;
    padding: 15px;
    @include flexboxWrap(row, normal, center);
    gap: 1rem;
    box-shadow: 0 4px 8px $paleBlack, 0 6px 20px $paleBlack;
    
        .search-img {
            width: 28px;
            height: 34px;
        }
    
        form {
            flex-grow: 1;
        }
    
        input {
            width: 100%;
            border: none;
            font-size: 1rem;
            color: $navyBlue;
            font-family: $openSans;
    
          &::placeholder {
            color: $navyBlue;
            font-weight: 700;
            opacity: 0.8;
          }
        }
    }
}

.form-error {
  color: red;
  margin-top: 10px;
  font-weight: 600;
}

.loading-container {
  @include flexboxWrap(row, center, center);
  color: $navyBlue;
  font-weight: 700;
  text-align: center;

  p {
    cursor: pointer;
  }

  @include landscapeSet {
    text-align: left;
    justify-content: space-between;
  }
}

</style>