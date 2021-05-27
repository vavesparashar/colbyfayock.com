import { normalizePathname } from 'lib/routes';

const DEFAULT_CATEGORY = 'updates';

const CATEGORIES = [
  {
    label: 'Spiritual',
    value: 'spiritual',
  },
  
];

class Project {

  constructor(node) {
    this.title = node.frontmatter.title;
    this.path = normalizePathname(node.fields.slug)
    this.date = node.frontmatter.date;
    this.template = node.frontmatter.template;
    this.category = this.categoryFromValue(node.frontmatter.category);
    this.excerpt = node.excerpt;
    this.html = node.html;
  }

  categoryFromValue( category_value = DEFAULT_CATEGORY ) {

    let matching_category = CATEGORIES.find((category) => category.value === category_value);

    if ( !matching_category ) {
      matching_category = CATEGORIES.find((category) => category.value === DEFAULT_CATEGORY);
    }

    if ( typeof matching_category !== 'object' ) {
      return null;
    }

    return matching_category.label;

  }

}

export default Project;