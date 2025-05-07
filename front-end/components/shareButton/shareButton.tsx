'use client';

import React, { useState } from 'react';
import ShareModal from './shareModal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShare } from '@fortawesome/free-solid-svg-icons';

interface ShareButtonProps {
  packageId: number;
}

const ShareButton: React.FC<ShareButtonProps> = ({ packageId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const shareUrl = `${process.env.NEXT_PUBLIC_BASE_URL}/packageCards/more-details/${packageId}`;


  return (
    <>
      <button
        className="inline-flex items-center gap-1 bg-blue-100 hover:bg-gray-200 text-gray-900 text-sm font-medium py-1.5 px-3 rounded-full shadow-sm transition"
        onClick={() => setIsOpen(true)}
        title="Share"
      >
        <FontAwesomeIcon icon={faShare} className="text-sm" />
        <span>Share</span>
      </button>
      {isOpen && (
        <ShareModal url={shareUrl} onClose={() => setIsOpen(false)} />
      )}
    </>
  );
};

export default ShareButton;
