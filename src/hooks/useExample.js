import Example from 'models/example';
import { templateTypeFromNode } from 'lib/nodes';
import { useNodes } from './';

export default function useExample() {
  const nodes = useNodes();

  // Filter down to only the posts

  const posts = nodes.filter(({ node = {} } = {}) => {
    return templateTypeFromNode(node) === 'example';
  });

  // Map through all posts and create a new Post instance for each

  return {
    example: posts.map(({ node } = {}) => new Example(node)),
    toAll: '/all-example'
  }
}