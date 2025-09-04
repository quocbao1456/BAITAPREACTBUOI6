export default function Modal({ open, onClose, children }) {
  if (!open) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content glow"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
        <button className="btn secondary close-btn" onClick={onClose}>
          Đóng
        </button>
      </div>
    </div>
  );
}
