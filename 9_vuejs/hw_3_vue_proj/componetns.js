Vue.component('change-Kitchen', {

  template: `
  
  <div>
 
<p class="blogDetails__mid__content__right__text">Знание о том, как жить дальше, поглощает всю жизненную силу, 
которая есть у человека.Вопреки распространенному мнению.Существует множество вариантов цитат из
"Lorem Ipsum", но большинство из них подверглись изменениям в той или иной форме, путем добавления юмора или
случайных слов, которые выглядят даже немного неправдоподобно. Неловкость, скрытая в середине текста. 
Все генераторы Lorem Ipsum в Интернете, как правило, повторяют предопределенные фрагменты по мере необходимости.
</p>
  <div class="blogDetails__mid__content__right__quotes">
  <h1 class="blogDetails__mid__content__right__quotes__header">“</h1>
  <p class="blogDetails__mid__content__right__quotes__text">Какая-то умная и красивая цитата.</p>
</div>
  <h1 class="blogDetails__mid__content__right__header">!Кухня! Дизайнерские спринты - это здорово</h1>
  <p class="blogDetails__mid__content__right__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
      vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered.</p>
      <ul class="blogDetails__mid__content__right__points">
                  <ol class="blogDetails__mid__content__right__text"> <span
                          class="blogDetails__mid__content__right__points__text">1.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>
                  <ol class="blogDetails__mid__content__right__text"><span
                          class="blogDetails__mid__content__right__points__text">2.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>
                  <ol class="blogDetails__mid__content__right__text"><span
                          class="blogDetails__mid__content__right__points__text">3.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>
              </ul>
              
              <img class="blogDetails__mid__content__right__img" src="img/blogDetaisImg2.png" alt="photo">
              <p class="blogDetails__mid__content__right__text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
                  vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
                  Lorem Ipsum available, but the majority have suffered.</p>
  </div>
  
  `
})
Vue.component('change-Bedroom', {

  template: `
  <div>
  <h1 class="blogDetails__mid__content__right__header">!Спальня! Дизайнерские спринты - это здорово</h1>
  <p class="blogDetails__mid__content__right__text">Dolor sit amet, adipiscing Aliquam eu sem
      vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered.</p>
      <div class="blogDetails__mid__content__right__quotes">
      <h1 class="blogDetails__mid__content__right__quotes__header">“</h1>
      <p class="blogDetails__mid__content__right__quotes__text">Какая-то умная и красивая цитата.</p>
  </div>
  </div>
  `
})
Vue.component('change-Building', {

  template: `
  <div>
  <h1 class="blogDetails__mid__content__right__header">!Здания! Дизайнерские спринты - это здорово</h1>
  <p class="blogDetails__mid__content__right__text">Popular belief.There are many variations of passages of
  Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
      vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered.</p>
      <ul class="blogDetails__mid__content__right__points">
                  <ol class="blogDetails__mid__content__right__text"> <span
                          class="blogDetails__mid__content__right__points__text">1.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>
                  <ol class="blogDetails__mid__content__right__text"><span
                          class="blogDetails__mid__content__right__points__text">2.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>

              </ul>
  </div>
  `
})

Vue.component('change-Architecture', {

  template: `
  <div>
  <h1 class="blogDetails__mid__content__right__header">!Архитектура! Дизайнерские спринты - это здорово</h1>
  <p class="blogDetails__mid__content__right__text">Contrary to popular belief.There are many variations of passages of
  Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
      vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered.</p>
  </div>
  `
})
Vue.component('change-Planning', {

  template: `
  <div>
  <h1 class="blogDetails__mid__content__right__header">!Планирование! Дизайнерские спринты - это здорово</h1>
  <p class="blogDetails__mid__content__right__text">There are many variations of passages of
  Lorem Ipsum available, but the majority have suffered.Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem
      vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of
      Lorem Ipsum available, but the majority have suffered.</p>
      <ul class="blogDetails__mid__content__right__points">
                  <ol class="blogDetails__mid__content__right__text"> <span
                          class="blogDetails__mid__content__right__points__text">1.</span>Contrary to popular
                      belief.There are many
                      variations of passages of Lorem Ipsum available, but
                      the majority have suffered.</ol>
          
              </ul>
  </div>
  `
})
Vue.component('change-none', {
  template: `
  <div>
  <change-Kitchen>  
  </change-Kitchen>
  <change-Bedroom>  
  </change-Bedroom>
  <change-Building>  
  </change-Building>
  <change-Architecture>  
  </change-Architecture>
  <change-Planning>  
  </change-Planning>
  </div>
  `
})