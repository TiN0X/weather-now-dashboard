import React from 'react';
import Input from '@shared/ui/other/Input/Input.tsx'
import classes from '@features/searchByCity/ui/SearchByCity.module.scss'
import IconSearch from '@shared/ui/icons/IconSearch/IconSearch.tsx'
import Button from '@shared/ui/other/Button/Button.tsx'
import SelectList from '@shared/ui/other/Select/SelectList/SelectList.tsx'
import SelectOption from '@shared/ui/other/Select/SelectOption/SelectOption.tsx'
import {useCitySelection} from '@features/searchByCity/model/useCitySelection.ts'
import IconSpinner from '@shared/ui/icons/IconSpinner/IconSpinner.tsx'
import clsx from 'clsx'

const SearchByCity: React.FC<{className: string}> = ({ className })=>  {
  const {
    handleInputChange,
    handleChangeCity,
    handleStartSearch,
    mappedGeocoding,
    isLoading,
    city,
    debouncedSearch,
    showSuggestions
  }  = useCitySelection()

  const hasResult = mappedGeocoding!.length > 0
  const hasCity = debouncedSearch?.length >= 2

  return (
    <form className={clsx(className, classes.searchByCityForm)} onSubmit={handleStartSearch} action="#">
      <Input
        Icon={IconSearch}
        placeholder='Search for a place...'
        value={city}
        onChange={handleInputChange}
        maxLength={20}
      >

        {isLoading && (
          <SelectList
            isOpenSelect={showSuggestions}
          >
            <div className={classes.searchByCityFormLoader}>
              <IconSpinner size={'1.2rem'}/>
              <span>Search in progress...</span>
            </div>
          </SelectList>
        )}

        {showSuggestions && hasResult && city.length > 0 && (
          <SelectList
            isOpenSelect={showSuggestions}
          >
            {mappedGeocoding!.map(item => (
              <SelectOption
                key={item.id}
                label={`${item.city}, ${item.adminDivision.admin1 ? item.adminDivision.admin1 : ''}, ${item.adminDivision.admin2 ? item.adminDivision.admin2 : ''}`}
                onClick={() => handleChangeCity(item.city, item.location)}
              />
            ))}
          </SelectList>
        )}
      </Input>
      <Button disabled={isLoading || !hasCity} color={'primary'} type='submit'>Search</Button>
    </form>
  );
}

export default SearchByCity;