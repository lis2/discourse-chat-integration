import RestModel from 'discourse/models/rest';
import Category from 'discourse/models/category';
import computed from "ember-addons/ember-computed-decorators";

export default RestModel.extend({
  available_filters: [
    { id: 'watch', name: I18n.t('chat.filter.watch'), icon: 'exclamation-circle' },
    { id: 'follow', name: I18n.t('chat.filter.follow'), icon: 'circle'},
    { id: 'mute', name: I18n.t('chat.filter.mute'), icon: 'times-circle' }
  ],

  category_id: null,
  tags: null,
  provider: '',
  channel: '',
  filter: null,

  @computed('category_id')
  category(categoryId) {
    if (categoryId){
      return Category.findById(categoryId);
    }else {
      return false;
    }
  },

  @computed('filter')
  filterName(filter) {
    return I18n.t(`slack.present.${filter}`);
  },

  updateProperties() {
    return ['category_id','provider','channel', 'tags','filter'];
  }
});