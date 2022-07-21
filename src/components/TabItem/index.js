import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTab, activeTab} = props
  const {tabId, displayText} = tabDetails
  const activeTabItem = () => {
    updateActiveTab(tabId)
  }

  const tabListItem = activeTab ? 'tabItem-Active' : 'tabItem'

  return (
    <>
      <button type="button" onClick={activeTabItem} className={tabListItem}>
        {displayText}
      </button>
    </>
  )
}

export default TabItem
