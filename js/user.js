import { preferences } from './preferences.js';
import { authors } from './authors.js';

const preferencesWrapper = document.getElementById('preferences-ctn');
const authorsWrapper = document.getElementById('authors-ctn');

const createAuthorPreference = (author) => {
 const authorPreference = document.createElement('div');
 authorPreference.innerHTML = `
 <div class="grid grid-cols-2 gap-4 py-6 md:grid-cols-[2fr_fit-content(50%)]  lg:gap-4 px-2">
 <div class="m-auto flex  flex-col gap-2 md:w-full place-items-start">
   <h3 class="whitespace-wrap w-full text-base font-medium uppercase leading-5 tracking-tight text-[#2E2E2E] md:text-lg md:leading-7">${author}</h3>
   <div class="scale-75 place-self-start -ml-5">
   <input type="checkbox" class="absolute w-full h-full -translate-x-1/2 rounded-md appearance-none cursor-pointer peer left-1/2">
   <span class="ml-4 flex h-10 w-16 flex-shrink-0 cursor-pointer items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-8 after:w-8 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:bg-[#E4013A] peer-checked:after:translate-x-6"></span>
 </div>
 </div>
 <div class="relative flex items-center justify-center">
   <div class="relative md:h-28 w-28">
     <img src="./assets/author-image.png" alt="" class="object-cover rounded-full">
   </div>
 </div>
</div>
 `;

 return authorPreference;
}

const createAuthorPreferences = (authors) => {
 authors.forEach(author => {
  const authorPreference = createAuthorPreference(author);
  authorsWrapper.appendChild(authorPreference);
 })
}

createAuthorPreferences(authors);

const createPreference = (category) => {
 const preference = document.createElement('div');

 preference.innerHTML = `
 <label class="relative flex items-center justify-between pt-4 pb-4 pl-4 pr-2 text-xl border rounded-lg group">
 ${category}
 <div class="scale-75">
   <input type="checkbox" class="absolute w-full h-full -translate-x-1/2 rounded-md appearance-none cursor-pointer peer left-1/2" />
   <span
     class="ml-4 flex h-10 w-16 flex-shrink-0 cursor-pointer items-center rounded-full bg-gray-300 p-1 duration-300 ease-in-out after:h-8 after:w-8 after:rounded-full after:bg-white after:shadow-md after:duration-300 group-hover:after:translate-x-1 peer-checked:bg-[#E4013A] peer-checked:after:translate-x-6"
   ></span>
 </div>
</label>
 `;
 return preference;
}


const createPreferences = (categories) => {
 categories.forEach(category => {
  const preference = createPreference(category);
  preferencesWrapper.appendChild(preference);
 })
}


createPreferences(preferences.categories);

