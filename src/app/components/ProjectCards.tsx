"use client";

import Image from "next/image";
import { Fragment, useEffect, useId, useRef, useState } from "react";
import styles from "../../styles/pages/home.module.css";
import type { Project } from "../content/projects";

export default function ProjectCards({ projects }: { projects: Project[] }) {
  const [openProjectId, setOpenProjectId] = useState<string | null>(null);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const modalTitleId = useId();

  useEffect(() => {
    if (!openProjectId) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenProjectId(null);
    };

    window.addEventListener("keydown", onKeyDown);
    closeButtonRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openProjectId]);

  const openModal = (projectId: string) => setOpenProjectId(projectId);
  const closeModal = () => setOpenProjectId(null);

  const openProject = openProjectId
    ? projects.find((p) => p.id === openProjectId) ?? null
    : null;
  const openProjectModal = openProject?.modal ?? null;

  return (
    <>
      <div className={styles.projects}>
        {projects.map((project) => {
          const isClickable = Boolean(project.modal);

          return (
            <article
              key={project.id}
              className={styles.projectCard}
              role={isClickable ? "button" : undefined}
              tabIndex={isClickable ? 0 : undefined}
              onClick={isClickable ? () => openModal(project.id) : undefined}
              onKeyDown={
                isClickable
                  ? (event) => {
                      if (event.key === "Enter" || event.key === " ") {
                        event.preventDefault();
                        openModal(project.id);
                      }
                    }
                  : undefined
              }
              aria-label={isClickable ? `Open ${project.title} details` : undefined}
            >
              <div className={styles.projectCardMain}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                {project.period || project.stack ? (
                  <div className={styles.projectMeta}>
                    {project.period ? (
                      <span className={styles.projectMetaDate}>
                        {project.period}
                      </span>
                    ) : null}
                    {project.stack ? (
                      <span className={styles.projectMetaStack}>
                        {project.stack}
                      </span>
                    ) : null}
                  </div>
                ) : null}
                <p className={styles.projectDescription}>{project.description}</p>
                {project.link ? (
                  <a
                    className={styles.projectLink}
                    href={project.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => e.stopPropagation()}
                  >
                    {project.link.label}
                  </a>
                ) : null}
              </div>

              {project.logo && project.showLogoOnCard !== false ? (
                <div className={styles.projectCardAside} aria-hidden="true">
                  <Image
                    className={styles.projectLogo}
                    src={project.logo.src}
                    alt={project.logo.alt}
                    width={project.logo.width}
                    height={project.logo.height}
                    sizes="(max-width: 768px) 200px, 240px"
                  />
                </div>
              ) : null}
            </article>
          );
        })}
      </div>

      {openProject && openProjectModal ? (
        <div
          className={styles.modalOverlay}
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) closeModal();
          }}
        >
          <div
            className={styles.modal}
            role="dialog"
            aria-modal="true"
            aria-labelledby={modalTitleId}
          >
            <div className={styles.modalHeader}>
              <div className={styles.modalHeaderInner}>
                <div className={styles.modalHeaderMain}>
                  {openProject.logo && openProject.showLogoInModal !== false ? (
                    <Image
                      className={styles.modalLogo}
                      src={openProject.logo.src}
                      alt=""
                      width={96}
                      height={96}
                      aria-hidden="true"
                    />
                  ) : null}

                  <div>
                    <h3 className={styles.modalTitle} id={modalTitleId}>
                      {openProject.title}
                    </h3>
                    {openProject.period || openProject.stack ? (
                      <div className={styles.modalMeta}>
                        {openProject.period ? (
                          <span className={styles.modalDate}>
                            {openProject.period}
                          </span>
                        ) : null}
                        {openProject.stack ? (
                          <span className={styles.modalStack}>
                            {openProject.stack}
                          </span>
                        ) : null}
                      </div>
                    ) : null}
                  </div>
                </div>

                <button
                  ref={closeButtonRef}
                  type="button"
                  className={styles.modalClose}
                  onClick={closeModal}
                  aria-label="Close"
                >
                  ×
                </button>
              </div>
            </div>

            <div className={styles.modalBody}>
              <div className={styles.modalBodyInner}>
                {openProjectModal.paragraphs.map((paragraph, index) => {
                  const isLast = index === openProjectModal.paragraphs.length - 1;
                  const isLead = index === 0;

                  return (
                    <Fragment key={index}>
                      <p
                        className={
                          isLead
                            ? styles.modalLead
                            : isLast
                              ? styles.modalMuted
                              : undefined
                        }
                      >
                        {paragraph}
                      </p>
                      {index === 0 && openProjectModal.screenshot ? (
                        <Image
                          className={styles.modalScreenshot}
                          src={openProjectModal.screenshot.src}
                          alt={openProjectModal.screenshot.alt}
                          width={openProjectModal.screenshot.width}
                          height={openProjectModal.screenshot.height}
                          sizes="(max-width: 768px) 92vw, 720px"
                        />
                      ) : null}
                    </Fragment>
                  );
                })}
              </div>
            </div>

            <div className={styles.modalFooter}>
              <div className={styles.modalFooterInner}>
                {openProject.link ? (
                  <a
                    className={styles.modalLink}
                    href={openProject.link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {openProject.link.label}
                    <svg
                      className={styles.externalIcon}
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path
                        fill="currentColor"
                        d="M14 3h7v7h-2V6.4l-9.3 9.3-1.4-1.4L17.6 5H14V3ZM5 5h6v2H7v10h10v-4h2v6H5V5Z"
                      />
                    </svg>
                  </a>
                ) : null}
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
