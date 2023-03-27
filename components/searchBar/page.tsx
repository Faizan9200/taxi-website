'use Client'
import React from 'react'
import styles from './searchbar.module.scss'

const SearchBar = (props: any) => {
  return (
    <div className={`${styles.search_container}`}>
    <form>
      <input type="text" placeholder={props.placeholder} name="search"/>
    </form>
  </div>
  )
}

export default SearchBar