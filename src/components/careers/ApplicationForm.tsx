import { useState, type FormEvent } from 'react';

interface Props {
  jobTitle: string;
  jobSlug: string;
}

export default function ApplicationForm({ jobTitle, jobSlug }: Props) {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus('submitting');

    const form = e.currentTarget;
    const formData = new FormData(form);

    // File validation
    const file = formData.get('resume') as File;
    if (file && file.size > 0) {
      if (!file.name.endsWith('.pdf')) {
        setErrorMessage('PDF 파일만 업로드 가능합니다.');
        setStatus('error');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setErrorMessage('파일 크기는 5MB 이하만 가능합니다.');
        setStatus('error');
        return;
      }
    }

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        setStatus('success');
        form.reset();
      } else {
        setErrorMessage('전송에 실패했습니다. 다시 시도해주세요.');
        setStatus('error');
      }
    } catch {
      setErrorMessage('네트워크 오류가 발생했습니다. 다시 시도해주세요.');
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <div className="p-8 rounded-xl bg-green-50 dark:bg-green-900/20 text-center">
        <p className="text-lg font-semibold text-green-800 dark:text-green-300">
          지원서가 정상적으로 접수되었습니다.
        </p>
        <p className="mt-2 text-sm text-green-600 dark:text-green-400">
          검토 후 안내드리겠습니다. 감사합니다.
        </p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-4 text-sm text-green-700 dark:text-green-300 underline"
        >
          추가 지원하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Web3Forms config */}
      <input type="hidden" name="access_key" value="YOUR_WEB3FORMS_ACCESS_KEY" />
      <input type="hidden" name="subject" value={`채용 지원: ${jobTitle}`} />
      <input type="hidden" name="from_name" value="한국해양기상기술 채용" />
      <input type="hidden" name="job_slug" value={jobSlug} />

      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            이름 *
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-colors"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            이메일 *
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-colors"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          연락처
        </label>
        <input
          type="tel"
          id="phone"
          name="phone"
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-colors"
        />
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          자기소개 / 지원 동기
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          className="w-full px-4 py-2.5 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-primary-light focus:border-transparent outline-none transition-colors resize-y"
        ></textarea>
      </div>

      <div>
        <label htmlFor="resume" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          이력서 (PDF, 5MB 이하) *
        </label>
        <input
          type="file"
          id="resume"
          name="resume"
          accept=".pdf"
          required
          className="w-full text-sm text-gray-500 dark:text-gray-400 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-primary-light/10 file:text-primary dark:file:text-primary-light hover:file:bg-primary-light/20 file:cursor-pointer file:transition-colors"
        />
      </div>

      {status === 'error' && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="w-full px-6 py-3 rounded-lg bg-primary text-white font-medium hover:bg-primary-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === 'submitting' ? '전송 중...' : '지원하기'}
      </button>
    </form>
  );
}
