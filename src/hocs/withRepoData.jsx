import React, { useState, useEffect } from 'react';

const withRepoData = (WrappedComponent, username) => {
  const Component = (props) => {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);

    const getRepos = async () => {
      const response = await fetch(`https://api.github.com/users/${username}/repos`);
      const repositories = await response.json();

      setRepos(repositories);
      setLoading(false);
    };

    useEffect(() => {
      getRepos();
    }, []);

    return (
      <WrappedComponent
        {...props}
        repos={repos}
        loading={loading}
      />
    );
  };

  Component.displayName = `withRepoData(${WrappedComponent.name})`;

  return Component;
};

export default withRepoData;
