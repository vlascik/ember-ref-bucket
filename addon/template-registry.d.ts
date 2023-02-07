import type RefToHelper from './helpers/ref-to';
import type CreateRefModifier from './modifiers/create-ref';

export default interface RefBucketRegistry {
  'ref-to': typeof RefToHelper;
  'tracked-ref-to': typeof RefToHelper;
  'tracked-global-ref-to': typeof RefToHelper;
  'create-ref': typeof CreateRefModifier;
  'create-tracked-ref': typeof CreateRefModifier<HTMLElement>;
  'create-tracked-global-ref': typeof CreateRefModifier;
}
