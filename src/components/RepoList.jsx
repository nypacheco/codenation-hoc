import React from 'react';
import PropTypes from 'prop-types';

import withRepoData from '../hocs/withRepoData';

const RepoList = ({ repos, loading }) => {
  if (loading) return <p>Loading ...</p>;

  return (
    <div>
      {repos.map((repo) => (
        <p key={repo.id}>
          {repo.full_name}
        </p>
      ))}
    </div>
  );
};

RepoList.propTypes = {
  repos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      full_name: PropTypes.string,
    }),
  ).isRequired,
  loading: PropTypes.bool.isRequired,
};

export default withRepoData(RepoList, 'gaearon');
