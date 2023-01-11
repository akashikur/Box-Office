import React, { useState, useCallback } from "react";
import Mainpage from "../components/Mainpage";
import { apiGet } from "../misc/Config";
import ShowGrid from "../components/show/ShowGrid";
import ActorGrid from "../components/actor/ActorGrid";
import { useLastQuery } from "../misc/custom-hooks";
import {
  SearchInput,
  RadioInputsWrapper,
  SearchButtonWrapper,
} from "./Home.Styled";
import CustomRadio from "../components/CustomRadio";

const renderresult = (result) => {
  if (result && result.length === 0) {
    return <div>No result</div>;
  }
  if (result && result.length > 0) {
    return result[0].show ? (
      <ShowGrid data={result} />
    ) : (
      <ActorGrid data={result} />
    );
  }
  return null;
};

const Home = () => {
  const [input, setInput] = useLastQuery();
  const [result, setresult] = useState(null);
  const [searchoption, setsearchoption] = useState("shows");
  const isShowsearch = searchoption === "shows";

  const Onclickchange = useCallback(
    (ev) => {
      setInput(ev.target.value);
    },
    [setInput]
  );

  const onKeyDown = (ev) => {
    if (ev.keyCode === 13) {
      onSearch();
    }
  };

  const onSearch = () => {
    apiGet(`/search/${searchoption}?q=${input}`).then((result) => {
      setresult(result);
    });
  };

  const onRadioChange = useCallback((ev) => {
    setsearchoption(ev.target.value);
  }, []);

  return (
    <Mainpage>
      <SearchInput
        type="text"
        placeholder="name something"
        onChange={Onclickchange}
        onKeyDown={onKeyDown}
        value={input}
      />
      <RadioInputsWrapper>
        <div>
          <CustomRadio
            label="shows"
            id="show-search"
            value="shows"
            checked={isShowsearch}
            onChange={onRadioChange}
          />
        </div>
        <div>
          <CustomRadio
            label="Actors"
            id="actor-search"
            value="people"
            checked={!isShowsearch}
            onChange={onRadioChange}
          />
        </div>
      </RadioInputsWrapper>
      <SearchButtonWrapper>
        <button type="button" onClick={onSearch}>
          search
        </button>
      </SearchButtonWrapper>
      {renderresult(result)}
    </Mainpage>
  );
};

export default Home;
