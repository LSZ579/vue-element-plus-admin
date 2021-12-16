
import { pageTitle } from '@/utils/setting'
const title = pageTitle

export default function getPageTitle(titles) {
  if (titles) {
    return `${titles} - ${title}`
  }
  return `${title}`
}
